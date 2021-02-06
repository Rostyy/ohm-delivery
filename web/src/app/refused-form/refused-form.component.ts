import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OhmService } from '../services/ohm.service';

@Component({
  selector: 'app-refused-form',
  templateUrl: './refused-form.component.html',
  styleUrls: ['./refused-form.component.scss']
})
export class RefusedFormComponent implements OnInit {
  form: FormGroup;
  get reason(): any { return this.form.get('reason'); }
  sendErrorMsg = '';
  successMsg: string;

  constructor(private fb: FormBuilder, private ohmService: OhmService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      reason: [null, [Validators.required]]
    });
  }

  sendReason(): void {
    this.ohmService.sendReason({reason: this.reason.value}).subscribe(({success}: any) => {
      if (success) {
        this.successMsg = 'reason saved';
        this.sendErrorMsg = '';
      }
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.successMsg = '';
      this.sendErrorMsg = 'Some problems!';
    });
  }

}
