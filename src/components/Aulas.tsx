import { useEffect, useState } from 'react';
import { Aula } from '../data/aulas';
import { listarAulas } from '../services/aulasapi';

export default function Aulas() {
  const [aulas, setAulas] = useState<Aula[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    listarAulas()
      .then(setAulas)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <section className="box">
      <h2 className="title is-4">Aulas</h2>
      <p className="mb-4">Confira as próximas aulas e materiais de apoio disponíveis.</p>

      {carregando && <progress className="progress is-small is-info" max={100} />}
      {erro && <div className="notification is-danger is-light">{erro}</div>}

      <div className="columns is-multiline">
        {aulas.map((aula) => (
          <div className="column is-half" key={aula.id}>
            <div className="card">
              <div className="card-content">
                <p className="tag is-link mb-2">{aula.disciplina}</p>
                <p className="title is-5">{aula.titulo}</p>
                <p className="subtitle is-6 has-text-grey">
                  {new Date(aula.data).toLocaleDateString('pt-BR')}
                </p>
                <div className="content">{aula.descricao}</div>
                <button className="button is-white">
                <a href="./{aula.materialUrl}" target="_blank">Confira a Aula</a>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}