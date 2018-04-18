<template>
  <div id="address-book">
    <div class="content">
        <div class="panel">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th rowspan="2">
                    <input type="checkbox" :checked="itemSelectedAll" v-on:click="choiceAllRow()">
                  </th>
                  <th rowspan="2" v-on:click="sortCol('id')">ID</th>
                  <th rowspan="2" v-on:click="sortCol('name')">Name</th>
                  <th rowspan="2" v-on:click="sortCol('location')">Location</th>
                  <th rowspan="2" v-on:click="sortCol('office')">Office</th>
                  <th colspan="2" class="center">Phone</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Office</th>
                  <th>Cell</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items">
                  <td>
                      <input type="checkbox" :checked="item.hasSelected" v-on:click="choiceRow(item)">
                  </td>
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.location}}</td>
                  <td>{{item.office}}</td>
                  <td>{{item.phone.office}}</td>
                  <td>
                    <span v-if="!item.phone.status" v-on:dblclick="editCellPhone(item)">{{item.phone.cell}}</span>
                    <span v-if="item.phone.status">
                      <input type="input" class="form-control" v-model="item.phone.cell">
                      <button type="button" class="btn btn-sm btn-succsss" v-on:click="updateCellPhone(item)">OK</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input type="input" class="form-control" placeholder="id" v-model="oneItem.id">
                  </td>
                  <td>
                    <input type="input" class="form-control" placeholder="name" v-model="oneItem.name">
                  </td>
                  <td>
                    <input type="input" class="form-control" placeholder="location" v-model="oneItem.location">
                  </td>
                  <td>
                    <input type="input" class="form-control" placeholder="office" v-model="oneItem.office">
                  </td>
                  <td>
                    <input type="input" class="form-control" placeholder="office phone" v-model="oneItem.phone.office">
                  </td>
                  <td>
                    <input type="input" class="form-control" placeholder="cell phone" v-model="oneItem.phone.cell">
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-sm btn-danger" v-on:click="deleteRow()">Delete</button>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" v-on:click="preUpdateRow()">Update</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-sm btn-danger" v-on:click="addRow()">Add</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <div>
          <!-- Modal -->
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">Dialog</h4>
                </div>
                <div class="modal-body">
                  <span v-for="item in items" v-if="item.hasSelected">{{item.name}}</span>&nbsp;&nbsp;
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="updateRow()">OK</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { sortBy } from '../service/common';
export default {
  name: 'address book',
  components: {},
  data () {
    return {
      info: 'address book',
      msg: 'address book page',
      items: [
        {
          id: '501',
          name: 'Khali Zhang',
          location: 'Shanghai',
          office: 'C-103',
          phone: {
            office: 'x55778',
            cell: '650-353-1239',
            status: false
          },
          hasSelected: false
        },
        {
          id: '502',
          name: 'Name2',
          location: 'Shanghai',
          office: 'C-104',
          phone: {
            office: 'x15778',
            cell: '100-353-1239',
            status: false
          },
          hasSelected: false
        }
      ],
      oneItem: {
        id: '',
        name: '',
        location: '',
        office: '',
        phone: {
          office: '',
          cell: '',
          status: false
        },
        hasSelected: false
      },
      rowInfo: 'You need choice one row',
      itemSelectedAll: false,
      sortDic: {
        key: '',
        asc: true
      }
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load address book page');
    },
    choiceAllRow: function () {
      this.itemSelectedAll = !this.itemSelectedAll;
      this.items.forEach((item) => {
        item.hasSelected = this.itemSelectedAll;
      });
    },
    choiceRow: function (item) {
      item.hasSelected = !item.hasSelected;
    },
    deleteRow: function () {
      let temp = [];
      let count = 0;
      // let items = this.items;
      this.items.forEach((item) => {
        if (!item.hasSelected) {
          temp.push(item);
        } else {
          count++;
        }
      });
      if (count === 0) {
        alert(this.rowInfo);
        return;
      }
      this.items = temp;
    },
    preUpdateRow: function () {
      let count = 0;
      this.items.forEach((item) => {
        if (item.hasSelected) {
          $('#myModal').modal();
          count++;
        }
      });
      if (count === 0) {
        alert(this.rowInfo);
      }
    },
    updateRow: function () {
      console.log('update ajax');
    },
    addRow: function () {
      this.items.push(this.oneItem);
      this.oneItem = {
        id: '',
        name: '',
        location: '',
        office: '',
        phone: {
          office: '',
          cell: '',
          status: false
        },
        hasSelected: false
      };
    },
    editCellPhone: function (item) {
      item.phone.status = true;
    },
    updateCellPhone: function (item) {
      item.phone.status = false;
    },
    sortCol: function (key) {
      if (key === this.sortDic.key) {
        this.sortDic.asc = !this.sortDic.asc;
      } else {
        this.sortDic.key = key;
      }
      let newItems = this.items;
      newItems.sort(sortBy(key, this.sortDic.asc));
      this.items = newItems;
    }
  }
};
</script>
<style lang="scss">
#address-book {
  .content {
    // background-color: skyblue;
    width: 80%;
    height: 400px;
    margin: auto;
    .panel {
      width: 100%;
      display: grid;
      .col-md-8 {
        margin: auto;
        .table {
          th {
            text-align: center;
          }
          td {
            text-align: center;
          }
        }
      }
    }
    .text-area {
      textarea {
        min-height: 120px;
      }
    }
  }
}
</style>