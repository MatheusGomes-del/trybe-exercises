import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return (
            <section id="container">
                {conteudos.map((item) => (
                  <div key={item.conteudo} className="square">
                      <ul>
                          <li className="card">{`O conteúdo é: ${item.conteudo}`}</li>
                          <li className="card">{`Status: ${item.status}`}</li>
                          <li className="card">{`Bloco: ${item.bloco}`}</li>
                      </ul>
                  </div>   
                ))}
            </section>
        )
    }
}

export default Content