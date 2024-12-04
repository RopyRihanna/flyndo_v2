<?php
// Register Custom Post Types
function register_flight_deals_post_type() {
    register_post_type('flight_deal', [
        'labels' => [
            'name' => 'Okazje lotnicze',
            'singular_name' => 'Okazja lotnicza',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-airplane',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_rest' => true,
    ]);

    register_post_type('destination', [
        'labels' => [
            'name' => 'Kierunki',
            'singular_name' => 'Kierunek',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-location',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_flight_deals_post_type');

// Register Custom Taxonomies
function register_flight_taxonomies() {
    register_taxonomy('region', ['destination'], [
        'labels' => [
            'name' => 'Regiony',
            'singular_name' => 'Region',
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);

    register_taxonomy('deal_type', ['flight_deal'], [
        'labels' => [
            'name' => 'Typy okazji',
            'singular_name' => 'Typ okazji',
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_flight_taxonomies');

// ACF Fields Configuration
if (function_exists('acf_add_local_field_group')):

acf_add_local_field_group([
    'key' => 'group_flight_deals',
    'title' => 'Szczegóły okazji lotniczej',
    'fields' => [
        [
            'key' => 'field_from_city',
            'label' => 'Miasto wylotu',
            'name' => 'from_city',
            'type' => 'text',
            'required' => 1,
        ],
        [
            'key' => 'field_to_city',
            'label' => 'Miasto docelowe',
            'name' => 'to_city',
            'type' => 'text',
            'required' => 1,
        ],
        [
            'key' => 'field_price',
            'label' => 'Cena',
            'name' => 'price',
            'type' => 'number',
            'required' => 1,
        ],
        [
            'key' => 'field_flight_date',
            'label' => 'Data lotu',
            'name' => 'flight_date',
            'type' => 'date_picker',
            'required' => 1,
        ],
        [
            'key' => 'field_booking_url',
            'label' => 'Link do rezerwacji',
            'name' => 'booking_url',
            'type' => 'url',
            'required' => 1,
        ],
    ],
    'location' => [
        [
            [
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'flight_deal',
            ],
        ],
    ],
]);

acf_add_local_field_group([
    'key' => 'group_destinations',
    'title' => 'Szczegóły kierunku',
    'fields' => [
        [
            'key' => 'field_destination_count',
            'label' => 'Liczba kierunków',
            'name' => 'destination_count',
            'type' => 'number',
            'required' => 1,
        ],
        [
            'key' => 'field_featured_image',
            'label' => 'Zdjęcie wyróżniające',
            'name' => 'featured_image',
            'type' => 'image',
            'return_format' => 'url',
            'preview_size' => 'medium',
            'required' => 1,
        ],
    ],
    'location' => [
        [
            [
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'destination',
            ],
        ],
    ],
]);

endif;

// Example query to get flight deals
function get_latest_flight_deals($count = 20) {
    $args = [
        'post_type' => 'flight_deal',
        'posts_per_page' => $count,
        'orderby' => 'date',
        'order' => 'DESC',
    ];
    return new WP_Query($args);
}

// Example query to get destinations
function get_destinations() {
    $args = [
        'post_type' => 'destination',
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order' => 'ASC',
    ];
    return new WP_Query($args);
}