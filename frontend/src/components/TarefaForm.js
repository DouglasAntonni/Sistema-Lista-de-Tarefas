// src/components/TarefaForm.js
import React, { useState } from 'react';
import supabase from '../supabaseClient';
import { FormContainer, Input, Button } from './styles/TarefaFormStyles';

const TarefaForm = ({ setTarefas }) => {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nome || !valor || !data) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const { data: tarefaData, error } = await supabase
            .from('tasks')
            .insert([{ Nome: nome, Valor: valor, Data: data }]);

        if (error) {
            console.error("Erro ao adicionar tarefa:", error);
            alert("Erro ao adicionar tarefa: " + error.message);
            return;
        }

        // Atualiza a lista de tarefas
        setTarefas(prev => [...prev, ...tarefaData]);

        // Limpa os campos
        setNome('');
        setValor('');
        setData('');
        console.log("Tarefa adicionada:", tarefaData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome da tarefa"
            />
            <Input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Digite o valor da tarefa"
            />
            <Input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Digite a data da tarefa"
            />
            <Button type="submit">Adicionar Tarefa</Button>
        </FormContainer>
    );
};

export default TarefaForm;
