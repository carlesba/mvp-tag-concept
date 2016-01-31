import React, {PropTypes, Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux'

class FormsGallery extends Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        component='div'
        className='o-gallery'
        transitionName='a-fade'
        transitionAppearTimeout={900}
      >
        {this.renderItems()}
      </ReactCSSTransitionGroup>
    )
  }
  get filteredItems () {
    const {forms, filteredForms} = this.props
    if (filteredForms.length) {
      return filteredForms.map(formId => {
        return forms.find(({id}) => formId === id)
      })
    } else {
      return forms
    }
  }
  renderItems (forms) {
    return this.filteredItems.map((form) =>
      <FormsGalleryItem key={form.id} form={form} />
    )
  }
}
FormsGallery.propTypes = {
  forms: PropTypes.array,
  filteredForms: PropTypes.array
}

class FormsGalleryItem extends Component {
  render () {
    const {title} = this.props.form
    return (
      <div className='o-gallery__item c-thumbnail'>
        <div className='o-vgrid o-vgrid--centered'>
          <div className='o-corner-tl'>aaa</div>
          <div className=''>
            {title}
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps ({forms, filteredForms}) {
  return {forms, filteredForms}
}

export default connect(mapStateToProps)(FormsGallery)
