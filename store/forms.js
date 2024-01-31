// store/forms
import { defineStore } from "pinia";


export const useFormStore = defineStore('form', () => {
  const register_form = [
    {
      Form_Heading: 'Registration',
      Form_Fields: [
        { label: 'FirstName', inputfield: 'text', value: '' },
        { label: 'LastName', inputfield: 'text', value: '' },
        { label: 'Password', inputfield: 'password', value: '' },
        { label: 'Email', inputfield: 'email', value: '' },
        { label: 'PhoneNumber', inputfield: 'tel', value: '' }
      ],
      Form_button: 'Register'
    }
  ]

  const login_form = [
    {
        Form_Heading:"Login",
        Form_Fields : [
            {label:"Email",inputfield:"email",value:""},
            {label:"Password",inputfield:"password",value:""}
        ],
        Form_button: 'Login'
    }
]

    const captcha_form = [
        {
            Form_Heading:"Security Check",
            Form_Fields : [
                {label : "code", inputfield:"text", value:""}
            ],
            Form_button : "check"
        }
    ]

    const Weather_Api_form = [
      {
        Form_Heading:"Weather Api",
        Form_Fields : [
          {label : "Enter City",inputfield:"text", value:""}
        ],
        Form_button : "search"
      }
    ]
  return { register_form , login_form, captcha_form, Weather_Api_form}
})


