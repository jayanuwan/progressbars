import { shallowMount, mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar.vue';
import ProgressButton from '@/components/ProgressButton.vue';
import ProgressContainer from '@/components/ProgressContainer.vue';
import progressbars from '@/api/progressbars.js'
import App from '@/App.vue'

import mockAxios from "axios";

const ProgressContainer_wrapper = shallowMount(ProgressContainer)
const App_wrapper = shallowMount(App)


describe('API', () => {

  it('Data check', () => {
    const data = progressbars.getData( );
    
  })
})

describe('Props', () => {

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

  it("displays props", () => {
    expect(wrapper.vm.bars[0]).toBe(20);
  })

  it("Button", () => {
    expect(wrapper.find('button').text()).toBe("45")
  })

  it("Progress Bar Percentage", () => {
    console.log(wrapper.html())
    expect(wrapper.find('.percentage').text()).toBe("20%")
  })

  it("Progress select", () => {
    expect(wrapper.find('option').text()).toBe('#progress1');
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

