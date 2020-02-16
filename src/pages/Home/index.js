import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ascension-adapt-masculino/06/MEI-0004-006/MEI-0004-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis caminhada</strong>
        <span>R$99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ascension-adapt-masculino/06/MEI-0004-006/MEI-0004-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis caminhada</strong>
        <span>R$99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ascension-adapt-masculino/06/MEI-0004-006/MEI-0004-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis caminhada</strong>
        <span>R$99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ascension-adapt-masculino/06/MEI-0004-006/MEI-0004-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis caminhada</strong>
        <span>R$99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ascension-adapt-masculino/06/MEI-0004-006/MEI-0004-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis caminhada</strong>
        <span>R$99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ascension-adapt-masculino/06/MEI-0004-006/MEI-0004-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis caminhada</strong>
        <span>R$99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
