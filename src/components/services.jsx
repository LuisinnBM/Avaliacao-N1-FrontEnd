function Services() {
  return (
    <section className="services section" id="services">
      <div className="section__content">
        <h2 className="section__title">Nossos Serviços</h2>
        <p className="section__text">
          Oferecemos acomodações cuidadosamente selecionadas, suporte ao cliente 24/7 e uma plataforma intuitiva 
          para encontrar o local ideal para sua viagem, seja uma escapada rápida ou uma longa estadia.
        </p>
        <div className="service-cards">
          <div className="card">
            <h3>Hospedagens Premium</h3>
            <p>Selecione entre nossas melhores propriedades</p>
          </div>
          <div className="card">
            <h3>Experiências Locais</h3>
            <p>Viva a cultura como um local</p>
          </div>
          <div className="card">
            <h3>Suporte 24/7</h3>
            <p>Assistência sempre que precisar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;