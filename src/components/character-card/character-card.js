import { LitElement, html, nothing } from "lit-element";
import styles from "./character-card-styles"

class characterCard extends LitElement {

    static get properties() {
        return {
            character : {
                type: Object
            },
            isFavorite: {
                type: Boolean
            }
        }
    }

    static get styles(){
        return [styles]
    }

    constructor() {
        super();
        this.character = {}
        this.isFavorite = false;
    }

    _sentToFavorite () {
            this.isFavorite = !this.isFavorite
            const event = new CustomEvent('favorite-sent', {
                detail : {character: this.character},
                bubbles : true,
                composed : true
            });
            this.dispatchEvent(event);
    }

    render() {
        if(this.character == null){
            return nothing
        }
        return html`
            <div class="card">
                <img src=${this.character.image}/>
                <h3>Nombre:${this.character.name}</h3>
                <h3>Especie: ${this.character.species}</h3>
                <h3>Genero: ${this.character.gender}</h3>
                <button @click="${this._sentToFavorite}">${!this.isFavorite ? html`Añadir a favoritos ❤️` : html`Eliminar de Favoritos`}</button>
            </div>
        `;
    }
}

customElements.define('character-card', characterCard);