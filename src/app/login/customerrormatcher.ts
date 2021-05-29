import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class CustomErrorMatcher implements ErrorStateMatcher{
    isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
    }
    
}