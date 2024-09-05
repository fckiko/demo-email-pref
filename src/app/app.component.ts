import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  emailPreferencesForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient) {
    this.emailPreferencesForm = this.fb.group({
      emailMarketing: [true],
      personalInsight: [true],
      eventInvitations: [false],
      researchFeedback: [true],
      unsubscribeAll: [false],

    });
  }

  togglePreference(category: string) {
    console.log(`${category} preference changed:`, this.emailPreferencesForm.controls[category].value);
    this.sendToApi()
  }

  updatePreferences() {
    console.log("Preferences updated", this.emailPreferencesForm.value);
    this.sendToApi()
  }
  sendToApi(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      data:this.emailPreferencesForm.value
    })
  }
}