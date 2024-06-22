import { LitElement, html } from "lit-element";
import "../character-card/character-card.js"
import styles from "./favorite-characters-styles"

class FavoriteCharacters extends LitElement {
    static get properties () {
        return {
            listFavorites: {type: Array}
        }
    }

    static get styles () {
        return [styles]
    }

    constructor(){
        super();
        this.listFavorites = []
    }

    _handleFavoriteSent(event) {
        const character = event.detail.character;
        if(this.listFavorites.some(fav => fav.id === character.id)){
          this.listFavorites = this.listFavorites.filter(fav => fav.id !== character.id);
        }else{
          this.listFavorites = [...this.listFavorites, character];
        }
      }

    render() {
        return html`
            ${this.listFavorites.length === 0
            ? html`<p>Aqui apareceran tus personajes favoritos</p>`
            : html`
                <div>
                ${this.listFavorites.map(item => html`
                <character-card .character="${item}" @favorite-sent="${this._handleFavoriteSent}"></character-card>
            `)}
                </div>
        `}
    `;
    }
}

customElements.define('favorite-characters', FavoriteCharacters)