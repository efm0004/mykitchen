import React, {Component} from 'react';
import  MKPantry from './MKPantry.jpg';

class Pantry extends Component {
    render() {
        return (
            <div>
                <a href="/"><img src={MKPantry} className="Pantry"/></a>
            </div>

        )
    }
}



export default Pantry;