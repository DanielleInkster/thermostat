require_relative 'note'
class Tag

  attr_reader :tag_name

  def initialize
  end

  def set_tag(name)
      @tag_name = name
  end

 def search_for(tag)
      if tag == @tag_name
        puts (@notebook.select { |x| x[:tag] == @name }.map { |u| u[:input] })
      end
    end


end

