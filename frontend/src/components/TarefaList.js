import React, { useEffect, useState, useCallback } from 'react';
import supabase from '../supabaseClient';
import {
    ListContainer,
    TarefaItem,
    EditButton,
    DeleteButton,
    Text,
} from './styles/TarefaListStyles';
import { DownloadButton } from './styles/ButtonStyles';

const TarefaList = ({ tarefas, setTarefas }) => {
    const [editando, setEditando] = useState(null);
    const [nome, setNome] = useState('');
    const [custo, setCusto] = useState('');
    const [dataLimite, setDataLimite] = useState('');

    // Função para carregar tarefas do banco de dados
    const carregarTarefas = useCallback(async () => {
        const { data, error } = await supabase.from('tasks').select('*');
        if (error) console.error("Erro ao carregar tarefas:", error);
        else setTarefas(data);
    }, [setTarefas]);

    // Carrega as tarefas ao montar o componente
    useEffect(() => {
        carregarTarefas();
    }, [carregarTarefas]);

    // Função para excluir uma tarefa
    const handleExcluirTarefa = async (id) => {
        const { error } = await supabase.from('tasks').delete().eq('id', id);
        if (!error) {
            setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
        }
    };

    // Função para editar uma tarefa
    const handleEditarTarefa = async (tarefa) => {
        const { error } = await supabase
            .from('tasks')
            .update({ Nome: nome, Valor: custo, Data: dataLimite })
            .eq('id', tarefa.id);

        if (!error) {
            setEditando(null);
            setTarefas((prevTarefas) =>
                prevTarefas.map((t) =>
                    t.id === tarefa.id ? { ...t, Nome: nome, Valor: custo, Data: dataLimite } : t
                )
            );
        }
    };

    // Função para gerar e baixar JSON das tarefas
    const gerarJson = () => {
        const jsonData = JSON.stringify(tarefas, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'tarefas.json';
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <ListContainer>
      <Text>Lista de Tarefas</Text>
      <DownloadButton onClick={gerarJson}>Baixar JSON das Tarefas</DownloadButton>
      {tarefas.length > 0 ? (
        tarefas.map((tarefa) => (
          <TarefaItem key={tarefa.id} highlight={tarefa.Valor >= 1000}>
            {editando === tarefa.id ? (
              <>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                />
                <input
                  value={custo}
                  onChange={(e) => setCusto(e.target.value)}
                  placeholder="Custo"
                  type="number"
                />
                <input
                  value={dataLimite}
                  onChange={(e) => setDataLimite(e.target.value)}
                  placeholder="Data Limite"
                  type="date"
                />
                <EditButton onClick={() => handleEditarTarefa(tarefa)}>
                  Salvar
                </EditButton>
              </>
            ) : (
              <>
                <Text>{tarefa.Nome} - R$ {tarefa.Valor.toFixed(2)}</Text>
                <Text>Data Limite: {tarefa.Data}</Text>
                <EditButton onClick={() => {
                  setEditando(tarefa.id);
                  setNome(tarefa.Nome);
                  setCusto(tarefa.Valor);
                  setDataLimite(tarefa.Data);
                }}>
                  Editar
                </EditButton>
                <DeleteButton onClick={() => handleExcluirTarefa(tarefa.id)}>
                  Excluir
                </DeleteButton>
              </>
            )}
          </TarefaItem>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </ListContainer>
    );
};

export default TarefaList;
