import sylvia from '../../../assets/group-members-images/sylvia.jpeg'
import morris from '../../../assets/group-members-images/morris.jpg'
import brian from '../../../assets/group-members-images/brian.jpeg'
import paul from '../../../assets/group-members-images/paul.jpeg'
import denno from '../../../assets/group-members-images/denno.enc'


const people = [
    {
      name: 'Sylvia Bosire',
      role: 'Front-End Developer',
      imageUrl: sylvia,
    },
    {
        name: 'Dennis Mwaniki',
        role: 'Front-End Developer',
        imageUrl: denno
      },
      {
        name: 'Morris Waithaka',
        role: 'Front-End Developer',
        imageUrl: morris
      },
      {
        name: 'Brian Mwita',
        role: 'Back-End Developer',
        imageUrl: brian
      },
      {
        name: 'Paul Ngugi',
        role: 'Back-End Developer',
        imageUrl: paul
      },
      {
        name: 'Joseph Ochieng',
        role: 'Back-End Developer',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/666/666201.png',
      }
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white mt-5">
        <div className="max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
              <p className="text-xl text-gray-500">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                suspendisse. Vivamus fringilla.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <img className="h-16 w-16 rounded-full lg:h-20 lg:w-20" src={person.imageUrl} alt="" />
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-teal-800">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }