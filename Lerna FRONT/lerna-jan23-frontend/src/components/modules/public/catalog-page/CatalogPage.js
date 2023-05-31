import React from 'react'
import CatalogPageMainComponent from './CatalogPageMainComponent'
import CatalogPageComponent from './CatalogPageMainComponent'
import CatalogSideFilters from './CatalogSideFilters'
import "../catalog-page/CatalogPageMainComponent.css"

export default function CatalogPage() {
  return (
    <div className='page-content'>
        <CatalogSideFilters></CatalogSideFilters>
        <CatalogPageMainComponent></CatalogPageMainComponent>
    </div>
  )
}
