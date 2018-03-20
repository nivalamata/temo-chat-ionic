import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Friend} from "../../models/user";
import {Util} from "../../providers/util/util";

/**
 * Generated class for the ProfileFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-friend',
  templateUrl: 'profile-friend.html',
})
export class ProfileFriendPage {

  public Util = Util;
  private profile: Friend = new Friend();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFriendPage');
    this.profile = this.navParams.get('friend');
  }

}
