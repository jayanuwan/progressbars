import { shallowMount, mount } from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar.vue'
import ProgressButton from '@/components/ProgressButton.vue'
import ProgressContainer from '@/components/ProgressContainer.vue'
import App from '@/App.vue'

// const ProgressBar_wrapper = mount(ProgressBar)
const ProgressButton_wrapper = mount(ProgressButton)
const ProgressContainer_wrapper = shallowMount(ProgressContainer)
const App_wrapper = shallowMount(App)

// console.log(ProgressBar_wrapper.html());
// console.log(ProgressButton_wrapper.html())
console.log(App_wrapper.html())

describe('Props', () => {
  it("displays props", () => {

    const wrapper = mount(App, {
      data() {
        return {
          buttons: [ 45
          ],
          bars: [ 20
          ],
          limit: 100
        }
      }
    })
    console.log(wrapper.html())
    expect(wrapper.vm.bars[0]).toBe(20);
    wrapper.find("button").trigger("onclick");
    expect(wrapper.vm.bars[0]).toBe(20);
    console.log(wrapper.find("button"));
    
    
  })

  
})

describe('Progress HTML', () => {
  const wrapper = mount(ProgressBar)

  it('Check Classes', () => {
    expect(wrapper.html()).toContain('class="progress-bar-container"')
    expect(wrapper.html()).toContain('class="percentage"')
    expect(wrapper.html()).toContain('class="proggress-bar"')
  })
})

describe('Props ', () => {
  it("displays props", () => {
    const wrapper = mount(ProgressBar,{
      propsData: {
        adjestment: 1,
        max : 50
      }
    })
    expect(wrapper.props('adjestment')).toBe(1)
    expect(wrapper.props('max')).toBe(50)
  })

  
})



// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
