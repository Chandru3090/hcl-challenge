import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css']
})
export class SearchCitiesComponent implements OnInit {

  searchCitiesForm: FormGroup;
  @Output() submitOut = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchCitiesForm = this.fb.group({
      city: ['Chennai', Validators.required]
    });
  }

  get f() {
    return this.searchCitiesForm.controls;
  }

  onSubmit() {
    if (this.searchCitiesForm.valid) {
      const params = {
        sensor: false,
        address: this.searchCitiesForm.value.city
      };
      this.submitOut.emit(params);
    }
  }
}
