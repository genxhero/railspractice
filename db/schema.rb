# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_24_164737) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_shops", force: :cascade do |t|
    t.string "name", null: false
    t.integer "location_id", null: false
    t.string "description", null: false
    t.boolean "couches", null: false
    t.boolean "armchairs", null: false
    t.boolean "restrooms", null: false
    t.boolean "wifi", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "shop_type", default: "Unspecified"
    t.index ["location_id"], name: "index_coffee_shops_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.string "state", null: false
    t.integer "zip", null: false
    t.integer "highway"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id", null: false
    t.string "url_key", null: false
    t.string "image_url"
    t.decimal "lat", precision: 10, scale: 6
    t.decimal "lng", precision: 10, scale: 6
    t.index ["id"], name: "index_locations_on_id"
    t.index ["name"], name: "index_locations_on_name"
  end

  create_table "lodgings", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "location_id", null: false
    t.string "lodging_type", null: false
    t.string "breakfast", null: false
    t.boolean "pool", null: false
    t.boolean "gym", null: false
    t.string "channels", default: [], array: true
    t.string "wifi", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_lodgings_on_location_id"
    t.index ["name"], name: "index_lodgings_on_name"
  end

  create_table "recommendations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "place_id", null: false
    t.string "place_type", null: false
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["place_id"], name: "index_recommendations_on_place_id"
    t.index ["user_id"], name: "index_recommendations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.integer "location_id", null: false
    t.string "cuisine", null: false
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "shop_type", default: "Unspecified"
    t.index ["location_id"], name: "index_restaurants_on_location_id"
    t.index ["name"], name: "index_restaurants_on_name"
  end

  create_table "travel_centers", force: :cascade do |t|
    t.integer "location_id", null: false
    t.string "name"
    t.text "description"
    t.float "unleaded"
    t.float "diesel"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_travel_centers_on_location_id"
    t.index ["name"], name: "index_travel_centers_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "test_group"
    t.index ["email"], name: "index_users_on_email"
    t.index ["password_digest"], name: "index_users_on_password_digest"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["test_group"], name: "index_users_on_test_group"
    t.index ["username"], name: "index_users_on_username"
  end

end
