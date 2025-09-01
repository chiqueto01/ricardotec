import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefa: string = '';

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void { this.carregarTarefas(); }

  carregarTarefas() {
    this.tarefaService.listar().subscribe(data => this.tarefas = data);
  }

  adicionarTarefa() {
    if (!this.novaTarefa.trim()) return;
    const tarefa: Tarefa = { descricao: this.novaTarefa, concluida: false };
    this.tarefaService.criar(tarefa).subscribe(() => {
      this.carregarTarefas();
      this.novaTarefa = '';
    });
  }

  atualizarTarefa(tarefa: Tarefa) {
    this.tarefaService.atualizar(tarefa.id!, tarefa).subscribe(() => this.carregarTarefas());
  }

  deletarTarefa(id: number) {
    this.tarefaService.deletar(id).subscribe(() => this.carregarTarefas());
  }
}