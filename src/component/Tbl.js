import React, { Component } from 'react';
import '../css/jquery.dataTables.css';
const $ = require('jquery')
$.DataTable = require('datatables.net')
class Tbl extends Component {
    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "Ville" },
                    { title: "Code postal" },
                    { title: "Tco_libelle" },
                    { title: "Dea fermeture." },
                ]
            }
        )
    }
    componentWillUnmount() {
        this.$el.DataTable.destroy(true)
    }
    render() {
        return (
            <div>
                <table id="example" className="display" width="100%" ref={el => this.el = el}>
                </table>
            </div>
        );
    }
}

export default Tbl;