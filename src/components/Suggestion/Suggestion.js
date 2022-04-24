
   
import { useEffect, useState } from 'react'
import './styles.css';

function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/dev-thomaz/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])


  return (
    <div className='container-suggestion'>
      <div className='header-suggestion'>
        <img
          className='img-user'
          alt='user pic'
          src='https://github.com/dev-thomaz.png'
        />
        <div className='user-infos-suggestion'>
          <div className='infos'>
            <span>thomaz_bittencourt</span>
            <p>Thomaz Bittencourt</p>
          </div>

          <button className='change'>Mudar</button>
        </div>
      </div>

      <div className='header-main-suggestion'>
        <p>Sugestões para você</p>
        <span>ver tudo</span>
      </div>

      <div className="user-suggestion" >

{slice.map((suggestion, key) => (
     <div className="infos-suggestion" key={key}>
        <img src={`https://github.com/${suggestion.login}.png`} />

        <div className="info-suggestion" >
            <span>{suggestion.login}</span>
            <p>Seguido por steve.jobs</p>
        </div>

        <button className='follow' >Seguir</button>
    </div>
))}


</div>

<footer className="footer-suggestion" >
<p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

<p>&copy; 2021 INSTAGRAM FROM META</p>

</footer>
</div>
  );
}

export default Suggestion;
