class DropTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :users
    drop_table :bookings
  end
end
