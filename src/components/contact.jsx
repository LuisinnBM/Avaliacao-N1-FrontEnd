function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section__content">
        <h2 className="section__title">Entre em Contato</h2>
        <p className="section__text">
          Ficou com dúvidas ou quer saber mais? Fale conosco através do nosso e-mail contato@airbnb.com 
          ou preencha o formulário em nossa página de suporte.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" className="form-input" />
          <input type="email" placeholder="Seu e-mail" className="form-input" />
          <textarea placeholder="Sua mensagem" className="form-textarea"></textarea>
          <button type="submit" className="btn btn-primary">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;