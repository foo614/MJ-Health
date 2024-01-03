import styles from '../_sticker-printing.module.scss'
import { Grid } from '@mui/material'
import * as React from 'react'

export class PrintingSticker extends React.PureComponent {
    render() {
        return (
            <div style={{ padding: '15px' }}>
                <div
                    style={{
                        height: '297mm',
                        width: '210mm',
                    }}
                >
                    <Grid container sx={{ height: '29.7mm' }}>
                        {[...Array(33)].map((item, index) => {
                            return (
                                <Grid item md={4} key={index}>
                                    <div
                                        style={{
                                            padding: '10px',
                                            height: '100%',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                columnGap: '10px',
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className={
                                                        styles.printStickerNumber
                                                    }
                                                >
                                                    001
                                                </p>
                                            </div>

                                            <div
                                                style={{
                                                    display: 'flex',
                                                    width: '100%',
                                                    columnGap: '10px',
                                                    margin: 'auto',
                                                }}
                                            >
                                                <p
                                                    className={
                                                        styles.printStickerSmallText
                                                    }
                                                >
                                                    -
                                                </p>
                                                <p
                                                    className={
                                                        styles.printStickerSmallText
                                                    }
                                                >
                                                    32/M
                                                </p>
                                                <p
                                                    className={
                                                        styles.printStickerSmallText
                                                    }
                                                >
                                                    -
                                                </p>
                                                <p
                                                    className={
                                                        styles.printStickerSmallText
                                                    }
                                                >
                                                    K2
                                                </p>
                                                <p
                                                    className={
                                                        styles.printStickerSmallText
                                                    }
                                                >
                                                    -
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <p
                                                className={
                                                    styles.printStickerName
                                                }
                                            >
                                                Princess Aura Nurr Ermily Amara
                                                binti Auliya Bidadari Nawal El
                                                Zendra{' '}
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className={
                                                        styles.printStickerSmallText
                                                    }
                                                >
                                                    0401 1010 0600 0001
                                                </p>
                                            </div>
                                            <div style={{ marginLeft: 'auto' }}>
                                                <p
                                                    className={
                                                        styles.printStickerDate
                                                    }
                                                >
                                                    12-07-2022
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        )
    }
}
