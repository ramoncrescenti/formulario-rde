import './App.css';
import logo from './crown.png';
import React, { useState } from 'react';
import { Label } from './components/Label';
import { Select } from './components/Select/Select';
import { Input } from './components/Input';
import { TextArea } from './components/TextArea';
import { Button } from './components/Button';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json()
      .then(data => setData(data.message)));
  }, []);

  const [form, setForm] = useState({
    quantity: 0,
    email: 'meu@email.com',
    whatsapp: '(13) 981234567',
    notes: '',
    produto: 'CANECA',
    tecido: 'ALGODAO',
    arq: ''
  })

  function formHandler(event) {
    event.preventDefault();
    
    const body = {
      ...form,
      //tecido: campo.tecido !== 'CAMISETA' ? undefined : campo.tecido
      //tecido: e.target.value === 'CAMISETA' ? 'ALGODAO' : undefined ***assim é como era no Select do Produto***
    }
    console.log('requisição', body);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="logo" alt="logo"></img>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    <div className="formulario">
      <form
        onSubmit={(event) =>
          formHandler(event)
        }
      >
        <Label texto={'Produto para orçamento'}/>
        <Select onChange={(e) => setForm((state) => ({...state, produto: e.target.value}))} options={[{ label: 'Caneca', value: 'CANECA'}, {label: 'Chinelo', value: 'CHINELO'}, {label: 'Camiseta', value: 'CAMISETA'}]} />
        {form.produto === 'CAMISETA' && <Select onChange={(e) => setForm((state) => ({...state, tecido: e.target.value}))} options={[{label: 'Algodão', value: 'ALGODAO'}, {label: 'Poliester', value: 'POLIESTER'}]} />}
        <Label texto={'Quantidade'}/>
        <Input type='number' value={form.quantity} onChange={(e) => setForm((state) => ({...state, quantity: e.target.value}))} maxLength={6}></Input>
        <Label texto={'E-mail para contato'}/>
        <Input type='email' value={form.email} onChange={(e) => setForm((state) => ({...state, email: e.target.value}))} maxLength={50}></Input>
        <Label texto={'Whatsapp'}/>
        <Input type='text' value={form.whatsapp} onChange={(e) => setForm((state) => ({...state, whatsapp: e.target.value}))} maxLength={14}></Input>
        <Label texto={'Observações'}/>
        <TextArea value={form.notes} onChange={(e) => setForm((state) => ({...state, notes: e.target.value}))}></TextArea>
        <Button texto='Enviar'/>
        <Label texto='Selecione o arquivo .cdr/psd ou uma imagem'/>
        <label for="inputFile" class="custom-file-upload">Escolher arquivo</label>
        <input type="file" id="inputFile" accept=".png"
          onChange={(e) => setForm((state) => ({...state, arq: e.target.value}))}>
        </input>
        <label>{form.arq}</label>
      </form>
    </div>
    </div>
  );
}

export default App;
