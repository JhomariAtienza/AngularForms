import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../../../shared/interfaces/Profile';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  submitted: boolean = false;
  formData: Profile = {
    email: '',
    name: '',
    bio: '',
    active: false
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadSavedData();
  }

  initializeForm(): void {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      bio: [''],
      active: [false]
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.submitted = true;
      this.formData = this.profileForm.value;
      localStorage.setItem('profileData', JSON.stringify(this.formData));
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  loadSavedData(): void {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
      this.profileForm.patchValue(this.formData);
      this.submitted = true;
    }
  }
}
