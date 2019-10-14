require 'date'
require_relative 'tags'

class Note
attr_reader :date, :input, :entry, :tag 

  def initialize(tag = Tag.new)
    @tag = tag
    @notebook = []
  end

  def tag(name = "Misc")
    @name = name
    @tag.set_tag(name)
  end

  def create(input)
    raise 'No tag' if @name == nil
    @input = input
    @entry = { 
    :date => Date.today.to_s,
    :input => @input,
    :tag => @name
    }
    store
    clear
  end

  def check
    puts @notebook
  end

  def search_tag(tag)
    @tag.search_for(tag)
  end
  

  private

  def store
    @notebook.push(entry)
  end

  def clear
    @date =nil
    @input = nil
    @name = nil
  end

end
  