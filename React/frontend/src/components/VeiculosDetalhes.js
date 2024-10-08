import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './VeiculosDetalhes.css';

const VeiculosDetalhes = () => {
  const { motoristaId } = useParams();
  const [veiculos, setVeiculos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await axios.get(`http://localhost:4040/veiculos/motorista/${motoristaId}`);
        setVeiculos(response.data);
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
      }
    };

    fetchVeiculos();
  }, [motoristaId]);

  const handleSalvar = async () => {
    try {
      // Substitua isto com a função de salvamento real ou remova se não for necessário
      await axios.post(`http://localhost:4040/veiculos/salvar`, { data: veiculos });
      navigate('/proprietarios'); // Redireciona para a página de proprietarios após salvar
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  return (
    <div className="veiculos-detalhes">
      <h1>Veículos do Motorista ID: {motoristaId}</h1>
      <div className="buttons-container">
        <button className="voltar-btn" onClick={() => navigate(-1)}>Voltar</button>
        <button className="criar-btn" onClick={() => navigate('/veiculos/criar')}>Criar</button>
        <button className="salvar-btn" onClick={handleSalvar}>Salvar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Multas</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo, index) => (
            <tr key={index}>
              <td>{veiculo.placa}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.ano}</td>
              <td>{veiculo.cor}</td>
              <td>
                <button onClick={() => navigate(`/multas/veiculo/${veiculo.id}`)}>
                  <img src="caminho/para/icone-de-multas.png" alt="Multas" />
                </button>
              </td>
              <td>
                <button onClick={() => navigate(`/veiculos/editar/${veiculo.id}`)}>
                  <img src="caminho/para/icone-de-editar.png" alt="Editar" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VeiculosDetalhes;
