class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano      
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
    }
    
    
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null) {
            localStorage.getItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id') //null
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistro() {

        //array de despesas
        let despesas = Array()

        let id = ocalStorage.getItem('id')


    // reperar Todas as Despesas casadastrrar em localStarege
        for(let i = 1; i <= id; i++) {

            //recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))
    
            //existe a posibilidade de haver indices que foram pulados/removidos

            if(despesa === null) {
                continue
            }
            
        
            despesas.push(despesa)
        }
        return despesas

    }
    pesquisar(despesa) {

        let despesasFiltradas = Array()

        despesasFiltradas = this.recuperarTodosRegistro()

        console.log(despesasFiltradas)

        //ano
        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }
        //mes
        if(despesa.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }
        //dia
        if(despesa.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        //tipo
        if(despesa.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.tipo)
        }

        //descricao
        if(despesa.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.descricao)
        }

        //valor
        if(despesa.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.descricao)
        }


    }
}

let bd = new Bd()

function cadastrarDespesa(){

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.velue
        )


    if (despesa.validarDados()) {
        bd.gravar(despesa)

        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_btn').className = 'btn btn-success'
        $('#ModalRegistraDespesa').modal('show')
        
    } else {

        document.getElementById('modal_titulo').innerHTML = 'Erro de inclusão de registro'
        document.getElementById("modal_titulo_div").className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Erro de gravação, verifique se todos os campos foram preenchidos corretamente'
        document.getElementById('modal_btn').innerHTML = 'Voltar e Corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'

        $('#ModalRegistraDespesa').modal('show')
    }

    ano.value = ''
    mes.valor = ''
    dia.value = ''
    tipo. value = ''
    descricao.value = ''
    valor.value = ''
}

function carregaListaDespesas() {

    let despesas = Arry()

    despesas = bd.recuperarTodosRegistro()


    //selecionando elemento Tbody da tabela
    let listaDespesas = document.getElementById('listaDespesas')

    /*
    <tr>
    <td>15/03/2018</td>
    <td>Alimentação</td>
    <td>Compras do mês</td>
    <td>23323</td>

    </tr>
    */

    //percorrer o array despesas, listando cada despesa de forma dinamica
    despesas.forEach(function(d) {


    //criando a linha (tr)
        let linha = listaDespesas.insertRow()

        //criar as colunas (td)
        linha.inserCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        linha.inserCell(1).innerHTML = d.tipo

        //ajustar o titulo

        switch(d.tipo) {
            case '1': d.tipo = 'Alimentacao'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break
        }

        linha.inserCell(1).innerHTML = d.tipo

        linha.inserCell(2).innerHTML = d.descricao
        linha.inserCell(3).innerHTML = d.valor

    }
    let bnt = document.createElement("button")
    btn.className = 'btn bnt-danger'
    
}

function pesquisarDespesa() {
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let tipo = document.getElementById('dia').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despes = new Despesa(ano, mes, dia, tipo, descricao, valor)

    bd.pesquisar(despesa)
}

