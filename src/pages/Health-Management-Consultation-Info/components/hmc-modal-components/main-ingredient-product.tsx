import { Grid, Stack, Checkbox } from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
import React from 'react'
const MainIngredientProduct = () => {
    const data = [
        {
            item: 'TriBiotix P+',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'NTC Omega 3 Fish Oil',
            nutrients: 'Fish Oil 500mg (contains EPA 180mg, DHA 120mg)',
        },
        {
            item: 'Yeast B Complex with Minerals',
            nutrients:
                'Natural Yeast Extract (contains Vit. B complex, Zinc, Chromium, Selenium)',
        },
        {
            item: 'Protide',
            nutrients:
                'Non-GMO Soybean Refining (Soy Protein) : Contain 17 types of a.a (Included 9 types essential a.a)',
        },
        {
            item: 'Life Vital Fiber Powder',
            nutrients:
                'Oats Extract, Wheat Grass Extract, Garcinia Cambogia, L- Carnitine, Multi-berry powder, Polyphenol',
        },
        {
            item: 'Life Lemon Algae Powder',
            nutrients:
                'Red Algae Powder, Inulin, Citric Acid, Lactic Acid Bacteria (Bifidobacterium Longum)',
        },
        {
            item: 'Vitamin D3',
            nutrients: 'Vitamin D3 800IU',
        },
        {
            item: 'Life Vision Jelly',
            nutrients:
                'Marigold Flower Extract (contains Lutein), Bilberry Extract, Wolfberry Extract, Black Currant Extract, Black Bean Extract, Red Algae Extract (contains Astaxanthin), Vitamin E',
        },
        {
            item: 'Life Flexible Jelly',
            nutrients:
                'Pineapple Extract (contains Bromelain), Malic Acid, Citric Acid, Licorice Extract, Turmeric Extract',
        },
        {
            item: 'Super Phoschol+',
            nutrients:
                'Phosphatidylcholine, Vitamin B1, Vitamin B2, Vitamin B3, Vitamin B6, Vitamin B12, Turmeric Extract',
        },
        {
            item: 'Life Berries',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'NuTriShake Chocolate/Vanilla',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'Moringa Pep',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'Reinsure',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
    ]
    return (
        <div className={styles.main_ingredient_div}>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <p className={styles.main_ingredient_text}>Products</p>
                </Grid>
                <Grid item md={8} xs={12}>
                    <p className={styles.main_ingredient_text}>Nutrients</p>
                </Grid>
                {data.map((item: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <Grid item md={4} xs={12}>
                                <p className={styles.nutrientsItem}>
                                    {item.item}
                                </p>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <p className={styles.nutrietsTextFieldText}>
                                    {item.nutrients}
                                </p>
                            </Grid>
                        </React.Fragment>
                    )
                })}
            </Grid>
            <div style={{ marginTop: '15px' }}>
                <p className={styles.main_ingredient_text}>Remarks</p>
            </div>
            <Stack direction="row" spacing={2} alignItems="center">
                <p>Print Main Ingredients of Products</p>
                <Checkbox name="main_ingredient_checkbox" />
            </Stack>
        </div>
    )
}
export default MainIngredientProduct
