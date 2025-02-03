import type { Schema, Struct } from '@strapi/strapi';

export interface ProductAttribute extends Struct.ComponentSchema {
  collectionName: 'components_product_attributes';
  info: {
    displayName: 'attribute';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_variants';
  info: {
    displayName: 'variant';
  };
  attributes: {
    attributes: Schema.Attribute.Component<'product.attribute', true>;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    sku: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stock: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.attribute': ProductAttribute;
      'product.variant': ProductVariant;
    }
  }
}
