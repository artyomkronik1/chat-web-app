import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserState} from "../../store/reducers/user.reducer";
import * as UserActions from '../../store/actions/user.actions';
import {User} from "../../interfaces/user";
import {loadUsers} from "../../store/actions/user.actions";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  users$ :User[] = []

  constructor(private store: Store<{users: {users:User[]}}>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(data=>{
     this.users$ = data.users
    })
    this.store.dispatch(loadUsers());
    console.log(this.users$)
  }
}
