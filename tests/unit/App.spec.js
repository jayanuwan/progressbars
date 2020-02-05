import { shallowMount, mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar.vue';
import ProgressContainer from '@/components/ProgressContainer.vue';
import App from '@/App.vue'

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
    expect(wrapper.find('.percentage').text()).toBe("20%")
  })

  it("Progress select", () => {
    expect(wrapper.find('option').text()).toBe('#progress1');
  })

  it("Click Button and check percentage", () => {
    const btn = wrapper.find('button');
    btn.trigger('click')
    expect(wrapper.find('.percentage').text()).toBe("65%")
  })

  const mwrapper = mount(App, {
    data() {
      return {
        buttons: [ -20
        ],
        bars: [ 80
        ],
        limit: 100
      }
    }
  })
  
  it("Click Button and check percentage - ", () => {
    const btn = mwrapper.find('button');
    btn.trigger('click')
    expect(mwrapper.find('.percentage').text()).toBe("60%")
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

describe('Progress Props ', () => {
  it("Check props", () => {
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

