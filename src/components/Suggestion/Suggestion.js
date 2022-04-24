import './styles.css';

function Suggestion() {
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

      <div className='user-suggestion'>
        <div className='infos-suggestion'>
          <img
            alt='usr profile'
            src='https://t.ctcdn.com.br/6UDw9yrT86-hAsaXkUWU3nt9wBM=/400x400/smart/filters:format(webp)/i490767.jpeg'
          />

          <div className='info-suggestion'>
            <span>@markzuckenberg</span>
            <p>seguido por steve.jobs</p>
          </div>
          <button className='follow'>seguir</button>
        </div>
        <div className='infos-suggestion'>
          <img
            alt='usr profile'
            src='https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/elon-musk.jpg?w=1200&h=1200&crop=1'
          />

          <div className='info-suggestion'>
            <span>@musk-elon</span>
            <p>seguido por bill.gates</p>
          </div>
          <button className='follow'>seguir</button>
        </div>
        <div className='infos-suggestion'>
          <img
            alt='usr profile'
            src='https://programadoresbrasil.com.br/wp-content/uploads/2020/07/torvalds_in_nature-1024x738.jpg'
          />

          <div className='info-suggestion'>
            <span>@linus_torvalds</span>
            <p>seguido por steve.jobs</p>
          </div>
          <button className='follow'>seguir</button>
        </div>
      </div>
      <footer className='footer-suggestion'>
        <p>
          Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull;
          Privacidade &bull; Termos &bull; Localizações &bull; Principais contas
          &bull; Hashtags &bull; idioma
        </p>

        <p>&copy; 2021 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
}

export default Suggestion;
