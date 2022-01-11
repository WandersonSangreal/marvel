import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {compileClassMetadata} from "@angular/compiler";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search = '';
  @Output() public onSearch = new EventEmitter<string>();

  public searchForm = this.formBuilder.group({search: null, validator: [Validators.required]});

  public constructor(private formBuilder: FormBuilder) {

    this.search = (sessionStorage.getItem('search') || '');

    if (this.search) {
      this.searchForm.controls['search'].setValue(this.search);
    }

  }

  public ngOnInit(): void {
  }

  public verifyClearSearch(): void {

    if (!this.searchForm.value.search && sessionStorage.getItem('search')) {
      sessionStorage.removeItem('search');
      this.onSearch.emit('');
    }

  }

  public onSubmit(): void {

    if (this.searchForm.valid) {

      sessionStorage.setItem('search', this.searchForm.value.search);
      sessionStorage.removeItem('page');

      this.onSearch.emit(this.searchForm.value.search);

    }

  }

}
