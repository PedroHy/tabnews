export interface IPost{
    id: string,
    owner_id: string,
    parent_id: string,
    slug: string,
    body?: string,
    title: string,
    status: string,
    source_url: string,
    created_at: string,
    updated_at: string,
    published_at: string,
    deleted_at: string,
    tabcoins: number,
    tabcoins_credit: number,
    tabcoins_debit: number,
    owner_username: string,
    children_deep_count: number
}