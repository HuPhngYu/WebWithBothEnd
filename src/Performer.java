import java.util.List;

public class Performer {
	private int id;
	private String name;
	private int age;
	private List<String> songList;
	
	public Performer(int id, String name, int age, List<String> songList) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.songList = songList;
	}
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	public List<String> getSongList() {
		return songList;
	}
	
	
}
