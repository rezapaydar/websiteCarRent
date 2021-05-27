import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class CustomErrorMatcher implements ErrorStateMatcher{
    isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        return control?.dirty && control.errors?.required;
    }
    
}