import { User } from "../../models/user";
import { getColumns } from "../../utils/getColumns";
import DataGrid from 'react-data-grid';
import { FC, useCallback, useEffect, useState } from "react";
import 'react-data-grid/lib/styles.css';
import styles from './UserGrid.module.css';
import DetailModal from "../modal/DetailModal";
import { Box, CircularProgress } from "@mui/material";

interface UserGridProps {
    data: User[];
}

export const UserGrid: FC<UserGridProps> = (props: UserGridProps) => {
    const [clickedRow, setClickedRow] = useState<User>();
    const [openDetailModal, setOpenDetailModal] = useState<boolean>(false);

    const columns = getColumns();

    const handleCurrentRow = (row: User) => {
        setClickedRow(row);
        setOpenDetailModal(true);
    }

    if (props.data && props.data.length > 0) {
        return (
            /*
            By using open source react data grid to populate in table
            <DataGrid columns={columns} rows={props.data} />
            */
            <div>
                <h1>Data from API</h1>
                <div className={styles.table_scroll}>
                    <div className={styles.css_table}>
                        <div className={styles.css_thead}>
                            <div className={styles.css_tr}>
                                {columns.map((header, index) => {
                                    return (
                                        <div className={styles.css_th} style={{ maxWidth: header['width'] ? header['width'] : 'auto', resize: Boolean(header['resizable']) ? 'horizontal' : 'none', overflow: 'auto' }} >{header['name']}</div>
                                    );
                                })
                                }
                            </div>
                        </div>
                        <div className={styles.css_tbody}>

                            {props.data.map((row, index) => {
                                return (
                                    <div className={styles.css_tr} onClick={(e) => handleCurrentRow(row)}>
                                        <div className={styles.css_td} data-label="id" >{row.id}</div>
                                        <div className={styles.css_td} data-label="name" >{row.name}</div>
                                        <div className={styles.css_td} data-label="username" >{row.username}</div>
                                        <div className={styles.css_td} data-label="email" >{row.email}</div>
                                    </div>
                                );
                            })
                            }

                        </div >
                    </div >
                </div >
                {openDetailModal && <DetailModal display={openDetailModal} onClose={() => setOpenDetailModal(false)} data={clickedRow} />}
                <div className={styles.table_footer}>
                    <b>Total Rows: </b>{props.data.length}
                </div>
            </div >
        );
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="secondary" />
        </Box>);
}