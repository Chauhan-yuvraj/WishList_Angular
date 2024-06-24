import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar; //without-signals
  }

  // avatar = input.required<string>()       //Signals
  // name = input.required<string>()        //Signals
  // select = output<string>();            //Signals
  // imagePath = computed(()=>'assets/users/' + this.avatar())            //Signals

  // selectedUser = signal(DUMMY_USERS[randomIndex]);    // signals

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);    //Signals

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }  when not using SIGNAL

  onSelectUser() {
    console.log('clicked!');
    this.select.emit(this.user.id);

    // const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);           //signals
  }
}
