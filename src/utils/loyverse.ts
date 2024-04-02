import { type UUID } from "crypto";

export const AUTH = "Bearer " + process.env.LOYVERSE_TOKEN;
       const API_VER  = "1.0"
export const API_BASE = "https://api.loyverse.com/v" + API_VER;

// SIMPLE AND CLEAN TYPES - DEV GENERATED
/**
 * @todo DO SOMETHING WITH THIS AND ADD ONTO IT
 */
export type CleanItem = {
    id: UUID,
    name: string,
};

export type VariantLinkedItem = Variant & {item: Item};
export type VaritStock = VariantLinkedItem & { in_stock: number; last_restock: Date; category?: Category; };
// RAW TYPES FROM COPYING LOYVERSE DOCS
// may be inaccurate, assume all properties are nullish ( type | null )
export type VariantStore = {
    store_id: string,
    pricing_type: string,
    price: null | number,
    available_for_sale: boolean,
    optimal_stock: null | number,
    low_stock: null | number
};

export type LVCategoriesWrapper = {
    categories: Category[];
}

export type Category = {
    id: string,
    name: string,
    color: string | null,
    created_at: string | null
    deleted_at: string | null
}

export type Variant = {
    variant_id: UUID,
    item_id: UUID,
    sku: string,
    reference_variant_id: string | null,
    option1_value: string | null,
    option2_value: string | null,
    option3_value: string | null,
    barcode: string | null,
    cost: number,
    purchase_cost: number | null,
    default_pricing_type: string,
    default_price: number | null,
    stores: VariantStore[],
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null
};

export type Shape = "SQUARE" | "CIRCLE" | "SUN" | "OCTAGON";
export type Color = "GREY" | "RED" | "PINK" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE" | "PURPLE";

export type Component = {
    variant_id: UUID,
    quantity: number
};
/**
 * Item has overall description for its variants.
 * An item with no variants will not have an empty variants array.
 * It will have ONE variant.
 * 
 * The ID of that variant is not the same as the item ID.
 * When an item has multiple variants, each variant will NOT have a
 * different description and different image.
 */
export type Item = {
    id: UUID,
    handle: string,
    item_name: string,
    description: string | null;
    reference_id: string | null,
    category_id: UUID | null,
    track_stock: boolean,
    sold_by_weight: boolean,
    is_composite: boolean,
    use_production: boolean,
    components: Component[],
    primary_supplier_id: UUID | null,
    tax_ids: [
        UUID,
        UUID
    ],
    modifiers_ids: [
        string,
        string
    ],
    form: Shape /* SHAPE */,
    color: Color /* COLOR */,
    image_url: string,
    option1_name: string | null,
    option2_name: string | null,
    option3_name: string | null,
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null,
    variants: Variant[]
};

export type LVItemsWrapper = {
    items: Item[],
    cursor: string
};

export type Inventory = {
    inventory_levels: {
        variant_id: string;
        store_id: string;
        in_stock: number;
        updated_at: string; // can be parsed to date obj
    }[];
    cursor: string;
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    phone_number: string;
    address: string;
    city: string;
    region: string;
    postal_code: string;
    country_code: string;
    customer_code: string;
    note: string;
    first_visit?: string | null;
    last_visit?: string | null;
    total_visits?: number;
    total_spent?: number;
    total_points: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    permanent_deletion_at?: string;
}