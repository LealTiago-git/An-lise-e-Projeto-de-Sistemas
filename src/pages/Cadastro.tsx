import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  const [type, setType] = useState<'fisica' | 'juridica'>('fisica');
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    rg: '',
    cpf: '',
    endereco: '',
    telefoneFixo: '',
    celular: '',
    email: '',
    razaoSocial: '',
    cnpj: '',
    contato: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Cadastro enviado com sucesso!');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Cadastro</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Selecione o tipo de cadastro e preencha o formulário.</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>
          <input
            type="radio"
            name="type"
            value="fisica"
            checked={type === 'fisica'}
            onChange={() => setType('fisica')}
            style={{ marginRight: '0.5rem' }}
          />
          Pessoa Física
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="juridica"
            checked={type === 'juridica'}
            onChange={() => setType('juridica')}
            style={{ marginRight: '0.5rem' }}
          />
          Pessoa Jurídica
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {type === 'fisica' && (
          <>
            <label style={styles.label}>
              Nome Completo:
              <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required style={styles.input} />
            </label>
            <label style={styles.label}>
              Data de Nascimento:
              <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} required style={styles.input} />
            </label>
            <label style={styles.label}>
              RG:
              <input type="text" name="rg" value={formData.rg} onChange={handleInputChange} required style={styles.input} />
            </label>
            <label style={styles.label}>
              CPF:
              <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} required style={styles.input} />
            </label>
          </>
        )}

        {type === 'juridica' && (
          <>
            <label style={styles.label}>
              Nome Fantasia:
              <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required style={styles.input} />
            </label>
            <label style={styles.label}>
              Razão Social:
              <input type="text" name="razaoSocial" value={formData.razaoSocial} onChange={handleInputChange} required style={styles.input} />
            </label>
            <label style={styles.label}>
              CNPJ:
              <input type="text" name="cnpj" value={formData.cnpj} onChange={handleInputChange} required style={styles.input} />
            </label>
            <label style={styles.label}>
              Pessoa para Contato:
              <input type="text" name="contato" value={formData.contato} onChange={handleInputChange} required style={styles.input} />
            </label>
          </>
        )}

        <label style={styles.label}>
          Endereço:
          <textarea name="endereco" value={formData.endereco} onChange={handleInputChange} required style={styles.textarea}></textarea>
        </label>
        <label style={styles.label}>
          Telefone Fixo:
          <input type="tel" name="telefoneFixo" value={formData.telefoneFixo} onChange={handleInputChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Celular:
          <input type="tel" name="celular" value={formData.celular} onChange={handleInputChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={styles.input} />
        </label>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Enviar Cadastro
        </button>
      </form>
    </main>
  );
};

const styles = {
  label: { display: 'block', marginBottom: '1rem' },
  input: { width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' },
  textarea: { width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', height: '100px' },
};

export default Cadastro;
