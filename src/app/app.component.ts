import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  emailPreferencesForm: FormGroup;
  queryParams: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {
    this.emailPreferencesForm = this.fb.group({
      emailMarketing: [true],
      personalInsight: [true],
      eventInvitations: [false],
      researchFeedback: [true],
      unsubscribeAll: [false],
    });

    // Load saved preferences from localStorage
    const savedPreferences = localStorage.getItem('emailPreferences');
    if (savedPreferences) {
      this.emailPreferencesForm.setValue(JSON.parse(savedPreferences));
    }

    this.emailPreferencesForm.valueChanges.subscribe((values) => {
      this.handleUnsubscribeAllChange(values.unsubscribeAll);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.queryParams = params;
      console.log(this.queryParams);
    });
  }

  togglePreference(category: string) {
    console.log(`${category} preference changed:`, this.emailPreferencesForm.get(category)?.value);
    // Save preferences to localStorage whenever a preference is toggled
    localStorage.setItem('emailPreferences', JSON.stringify(this.emailPreferencesForm.value));
  }

  updatePreferences() {
    console.log("Preferences updated", this.emailPreferencesForm.value);
    // Save preferences to localStorage when preferences are updated
    localStorage.setItem('emailPreferences', JSON.stringify(this.emailPreferencesForm.value));
    this.sendToApi();
  }

  handleUnsubscribeAllChange(isUnsubscribed: boolean) {
    if (isUnsubscribed) {
      this.emailPreferencesForm.patchValue({
        emailMarketing: false,
        personalInsight: false,
        eventInvitations: false,
        researchFeedback: false
      }, { emitEvent: false });
    }
  }

  async sendToApi() {
    await this.http.post('https://webhook-test.com/76cd2d54dbf09d66e4131a147cb6d149', {
      data: this.emailPreferencesForm.value
    }).subscribe(response => {
      console.log("Data sent successfully");
    }, error => {
      console.error("Error sending data", error);
    });
  }
}