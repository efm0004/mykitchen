import React from 'react';
import  MKRecipes from './MKRecipes.jpg';
import styles from './Recipes.module.css';

const Recipes = () => (
    <div className={styles.RecipeBox}>
            <a href="/comingsoon">
                <img src={MKRecipes}/>
            </a>
    </div>
)


export default Recipes;