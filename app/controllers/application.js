import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class ApplicationController extends Controller {

  userList = ['Theena', 'Dayalan', 'Tony','Tommy', 'Deena','Dhina', 'Diya'];
  searchText = '';

  @computed('userList.[]', 'searchText')
  get filteredUsers() {
    let searchText = (this.searchText || '').toLowerCase();
    let filteredUsers = this.userList.filter((user)=> {
      let lUser = (user || '').toLowerCase();
      return lUser.includes(searchText);
    });
    return filteredUsers;
  }
  set filteredUsers(value) {
    return value;
  }
}
