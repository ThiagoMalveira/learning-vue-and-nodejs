<template>
  <div>
    <h1 class="text-center">Clientes Inadimplentes</h1>
      <form class="form" @submit.prevent="grava()"> 
        <div class="form-group">
            <label>Nome </label>
            <input v-model.lazy="cliente.nome" placeholder="Nome Completo" class="form-control" autocomplete="off" required autofocus/>        
        </div>
        <div class="form-group">
            <label>Email </label>
            <input v-model.lazy="cliente.email" placeholder="Inserir email" class="form-control" required/>
        </div>
        <div class="form-group">
            <label for="valor">Valor</label>
            <input id="valor" v-model.lazy="cliente.valor" placeholder="Insira o valor em reais" class="form-control" required />
        </div>
        <button class="btn btn-primary" type="submit">Incluir Cliente</button>
    </form>
      <div>
        <h1 class="text-center">Lista de clientes</h1>
        <sorted-table
              :values="cliente"
              ascIcon="<span> ▲</span>"
              descIcon="<span> ▼</span>"
              class="table table-hover table-bordered">
            <thead>
                <tr>
                  <th><sort-link name="nome">NOME</sort-link></th>
                  <th><sort-link name="email">EMAIL</sort-link></th>
                  <th><sort-link name="valor">VALOR</sort-link></th>
                </tr>
            </thead>
            <template>
              <tbody>
                  <tr v-for="clientes in cliente" :key="clientes">
                    <td>{{ clientes.nome }}</td>
                    <td>{{ clientes.email }}</td>
                    <td>{{ clientes.valor }}</td>
                  </tr>
              </tbody>
            </template>
        </sorted-table>
      </div>
  </div>
</template>

<script>
import { SortedTable, SortLink } from "vue-sorted-table";
export default {
  components: {
    SortedTable,
    SortLink
  },
  data(){
    return {
        cliente: [],  
    }
  },
mounted(){
    this.getData();
  },
methods: {
    async getData() {
      this.$http
      .get('http://localhost:3000/show')
      .then(response => {(this.cliente = JSON.stringify(response.json))})
      .catch(e => {
        console.log(e)
      })
      
    },
      grava(){
        this.$http
          .post('http://localhost:3000/create', this.cliente)
          .then(() => this.cliente = new cliente(), err => console.log(err));
      },
    }
  }
</script>

<style>
.table {
  margin-top: 10%;
  width: 100%;
  max-width: 100%;
  margin-bottom: 5%;
  border-radius: 30px solid;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
}
table {
  background-color: transparent;
}
.table td,
.table th {
  background-color: #fff !important;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #ddd !important;
}
table {
  border-spacing: 0;
  border-collapse: collapse !important;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  margin-left:30px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.form-control {
  display: block;
  width: 100%;
  height: 30%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eee;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}
.text-center {
  text-align: center;
}
.form-group {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 5%;
  margin-left: 5%;
  display: inline-block;
  vertical-align: middle;
  align-items: center;
}
.btn-primary {
  margin-top: 1%;
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #265a88 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #265a88 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#265a88));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #265a88 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #245580;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #265a88;
  background-position: 0 -15px;
}
.btn-primary.active {
  background-color: #265a88;
  border-color: #245580;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn-primary {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
         
         box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
}
.btn-primary:disabled{
  -webkit-box-shadow: none;
          box-shadow: none;
}
</style>
