import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

class Product {
  name!: string;
  price!: number;
  qty!: number;
}

class Invoice {
  customerName!: string;
  contactNo!: number;
  email!: string;

  products: Product[] = [];
  additionalDetails!: string;
  
}


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  insurance:any;
  invoice = new Invoice();
  product:any=new Product();
  name:any;
  ngOnInit():void{ // method 'ngOnInit' is empty
}

  constructor(private api:ApicallService) {
    this.product
  }

  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'AR Hospital',
          fontSize: 25,
          alignment: 'center',
          color: '#047886',
        },
        {
          text: 'Patient Invoice',
          fontSize: 15,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'red',
        },
        {
          text: 'Patient Details',
          style: 'sectionHeader',
        },
        {
          columns: [
            [
              {
                text: this.invoice.customerName,
                bold: true,
              },
              { text: this.invoice.email },
              { text: this.invoice.contactNo },
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right',
              },
              {
                text: `Bill No : ${(Math.random() * 1000).toFixed(0)}`,
                alignment: 'right',
              },
            ],
          ],
        },
        {
          text: 'Billing Details',
          style: 'sectionHeader',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Name of charges', 'Cost', 'Quantity', 'Amount'],
              ...this.invoice.products.map((p) => [
                p.name,
                p.price,
                p.qty,
                (p.price * p.qty).toFixed(2),
              ]),

              [
                { text: 'Insurance', colSpan: 3 },
                {},
                {},
                this.invoice.products
                  .reduce(() => this.insurance, 0)
              ],

              [
                { text: 'Total Amount', colSpan: 3 },
                {},
                {},
                this.invoice.products
                  .reduce((sum, p) => (sum + p.qty * p.price) -this.insurance, 0)
                  .toFixed(2),
              ],

            ],
          },
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader',
        },
        {
          ul: [
            'In charge of calculating and collecting payments for medical procedures and services.',
            'Their work includes updating patient data, developing payment plans, and preparing invoices',
            'They work in medical administrative offices to ensure that patients are billed quickly and accurately',
            'The final phase of the billing process is ensuring those bills get, well, paid. Billers are in charge of mailing out timely, accurate medical bills, and then following up with patients whose bills are delinquent. Once a bill is paid, that information is stored with the patients file',
            'Each provider has it`s own set of guidelines and timelines when it comes to bill payment, notifications, and collections, so you’ll have to refer to the provider’s billing standards before engaging in these activities',
          ],
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
      },
    };
    if (action === 'download') {
      this.name = localStorage.getItem('name');
      console.log("generate bill");
      this.name=`${this.name}`+(Math.random() * 10).toFixed(0);
      pdfMake.createPdf(docDefinition).download(this.name);
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

  addProduct() {
    this.invoice.products.push(new Product());
  }


  setvalue(e:any)
  {
    this.insurance = e.target.value;
    console.log("value",e.target.value);
  }

  viewBill(){
    let  user_id = localStorage.getItem('object');
    console.log(this.name);
    console.log(user_id);
    this.api.userBill(user_id,this.name).subscribe((_data:any)=>{
      // arrow function is empty
    })
  }
}

